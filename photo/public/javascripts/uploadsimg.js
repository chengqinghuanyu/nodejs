function uploadFile() {
    var file = document.getElementById("file");
    var formData = new FormData();
    formData.append('file', file.files[0]);
    console.log(formData);
    $.ajax({
        url: '/himg',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            if (200 === data.code) {
                $('#result').html("上传成功！");
                $('#img').attr('src', data.data);
            } else {
                $('#result').html("上传失败！");
            }
            console.log('imgUploader upload success');
        },
        error: function() {
            $("#result").html("与服务器通信发生错误");
        }
    });
}

function uploadByForm() {
    uploadFile();
}