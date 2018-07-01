var qs = require('querystring');
exports.sendHtml = function(res, html) {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

exports.parseRecivedData = function(req, cb) {
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        body += chunk;
    });
    req.on('end', function() {
        var data = qs.parse(body);
        cb(data);
    });
}
exports.actionForm = function(id, path, label) {
    var html = "<form method='POST' action='" + path + "'>" +
        "<input type='hidden' name='id' value='" + id + "'>" +
        "<input type='submit' value='" + label + "'>" +
        "</form>";
    return html;
}

exports.add = function(db, req, res) {
    exports.parseRecivedData(req, function(work) {
        db.query(
            "INSERT INTO work (hours, date, description)  " +
            "VALUES (?, ?, ?)", [work.hours, work.date, work.description],
            function(err) {
                if (err) throw err;
                exports.show(db, res);
            }
        );
    })
}


exports.delete = function(db, req, res) {
    exports.parseRecivedData(req, function(work) {
        console.log('sss');
        db.query(
            "DELETE FROM work WHERE id=?", [work.id],
            function(err) {
                if (err) {
                    throw err;
                }
                console.log(work.id);
                exports.show(db, res);
            }
        )
    })
}


exports.archive = function(db, req, res) {
    exports.parseRecivedData(req, function(work) {
        db.query(
            "UPDATE work SET archived=1 WHERE id=?", [work.id],
            function(err) {
                if (err) {
                    throw err;
                }
                exports.show(db, res);
            }
        )
    })
}


exports.show = function(db, res, showArchived) {
    //return false;
    var querysea = "SELECT * FROM work " +
        "WHERE archived=? " +
        "ORDER BY date DESC";
    var archiveValue = (showArchived) ? 1 : 0;
    db.query(querysea, [archiveValue], function(err, rows) {
        if (err) throw err;
        var html = (showArchived) ? "" : '<a href="/archived">链接</a><br>';
        html += exports.workHitlistHtml(rows);
        html += exports.workFormHtml();
        exports.sendHtml(res, html);

    })
}

exports.showArchived = function(db, res) {
    exports.show(db, res, true);
}
exports.workHitlistHtml = function(rows) {
    var html = "<table>";
    for (var i in rows) {
        html += "<tr>";
        html += "<td>" + rows[i].date + "</td>";
        html += "<td>" + rows[i].hours + "</td>";
        html += "<td>" + rows[i].description + "</td>";
        if (!rows[i].archived) {

            html += "<td>" + exports.workArchivedForm(rows[i].id) + "</td>";
        }
        html += "<td>" + exports.workDeleteForm(rows[i].id) + "</td>";
        html += "</tr>"
    }
    html += "</table>"
    return html
}

exports.workFormHtml = function() {
    var html = "<form method='POST' action='/'>" +
        "<p>日期(yyyy-mm-dd):<br><input value='2018-09-22' name='date' type='date'>" +
        "<p>工作时长<br><input value='8' name='hours' type='number'></p>" +
        "<p>工作描述:<br><textarea name='description' placeholder='工作描述'></textarea>" +
        "<input  type='submit' value='添加'>" +
        "</form>";
    return html;
}
exports.workArchivedForm = function(id) {
    return exports.actionForm(id, '/archive', '存档');
}
exports.workDeleteForm = function(id) {
    return exports.actionForm(id, '/delete', '删除');
}