function download(url, filename, i) {
  // Timeout is here to bypass browser locking downloads
  setTimeout(() => {
	  fetch(url)
	    .then(response => response.blob())
	    .then(blob => {
	      const link = document.createElement("a");
	      link.href = URL.createObjectURL(blob);
	      link.download = filename;
	      link.click();
	  })
	  .catch(console.error);
  },i*2000)
}

// List all stickers of the pack, by restricting the scope on the modal
let stickers = document.querySelectorAll(".modal-content .StickerButton img")
for(let i = 0; i < stickers.length; i += 1){
	download(
		stickers[i].src,
		stickers[i].src.split("/").at(-1) + ".webp", 
		i
	)
}
