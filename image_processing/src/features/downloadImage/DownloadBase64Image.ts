    function downloadBase64Image(base64Image: string, filename: string) {
    // Convert base64 to blob
    const byteString = atob(base64Image.split(',')[1]);
    const mimeString = base64Image.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });

    // Create a link element
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename); // or any other extension
    document.body.appendChild(link);

    // Trigger download
    link.click();

    // Clean up and remove the link
    setTimeout(() => {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    }, 100); // Delay removal to ensure link is fully clicked
}

export default downloadBase64Image