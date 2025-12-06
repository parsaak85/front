async function fetchData() {
    try {
        const response = await fetch('https://back.liara.run');
        const data = await response.json();
        document.getElementById('data').innerHTML = 
            `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        document.getElementById('data').innerHTML = 
            `<p style="color: red;">Error: ${error.message}</p>`;
    }
}