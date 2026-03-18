import html2canvas from "html2canvas";

const removeBrokenImages = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");

  doc.querySelectorAll("img").forEach(img => {
    if (img.src.includes("via.placeholder.com")) {
      img.remove(); // 🚫 remove slow broken images
    }
  });

  return doc.body.innerHTML;
};

export const generateThumbnailFromHTML = async (html) => {
  return new Promise(async (resolve) => {
    const iframe = document.createElement("iframe");

    iframe.style.position = "fixed";
    iframe.style.left = "-10000px";
    iframe.style.top = "0";
    iframe.style.width = "880px";
    iframe.style.height = "1200px";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    const doc = iframe.contentDocument;

    const cleanHTML = removeBrokenImages(html);

    doc.open();
    doc.write(`
      <html>
        <body style="margin:0;background:white">
          ${cleanHTML}
        </body>
      </html>
    `);
    doc.close();

    setTimeout(async () => {
      const canvas = await html2canvas(doc.body, {
        scale: 0.45,
        backgroundColor: "#ffffff",
        useCORS: false, // important
        allowTaint: true
      });

      const img = canvas.toDataURL("image/png");

      document.body.removeChild(iframe);

      resolve(img);
    }, 80);
  });
};
