document.getElementById('check-urls').addEventListener('click', function() {
    const input = document.getElementById('input-urls').value;
    const urls = input.split('\n').filter(url => url.trim() !== ''); // 去除空行
    const output = document.getElementById('output-urls');
    output.value = ''; // 清空输出框

    urls.forEach(url => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    output.value += `${url} (错误码: ${response.status})\n`;
                }
            })
            .catch(error => {
                output.value += `${url} (无法访问)\n`;
            });
    });
});
