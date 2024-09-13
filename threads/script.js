document.getElementById('check-urls').addEventListener('click', function() {
    const input = document.getElementById('input-urls').value;
    const urls = input.split('\n').filter(url => url.trim() !== ''); // 去除空行
    const output = document.getElementById('output-urls');
    output.value = ''; // 清空输出框

    urls.forEach(url => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    // 如果响应状态不是200-299，显示错误状态码和信息
                    output.value += `${url} (错误码: ${response.status})\n`;
                }
            })
            .catch(error => {
                // 捕获到的异常信息，将其显示到输出框
                output.value += `${url} (无法访问: ${error.message})\n`;
            });
    });
});
