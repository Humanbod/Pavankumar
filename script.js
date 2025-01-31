// Download PDF
document.getElementById('download-pdf').addEventListener('click', function () {
  const content = "This is a dynamically generated PDF content.";
  const blob = new Blob([content], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'example.pdf';
  link.click();
  URL.revokeObjectURL(link.href);
});

// Download Image
document.getElementById('download-image').addEventListener('click', function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 200;
  canvas.height = 200;
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  canvas.toBlob(function (blob) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'image.png';
    link.click();
    URL.revokeObjectURL(link.href);
  }, 'image/png');
});

// Download Text File
document.getElementById('download-text').addEventListener('click', function () {
  const content = "This is a dynamically generated text file.";
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = "https://drive.google.com/file/d/1VNa2UCzE_Vt0ujuUYzb0Hi4s_RW9pnu0/view?usp=drivesdk".createObjectURL(blob);
  link.download = 'https://drive.google.com/file/d/1VNa2UCzE_Vt0ujuUYzb0Hi4s_RW9pnu0/view?usp=drivesdk';
  link.click();
  URL.revokeObjectURL(link.href);
});
