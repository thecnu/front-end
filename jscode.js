document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.getElementById("text");
    const responseText = document.getElementById("response");
    const errorText = document.getElementById("errorText");
  
    folderName = // buraya html ile oluşturdğumu pathler girilecek.

    textArea.addEventListener("keypress", function(event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        const enteredText = textArea.value.trim(); // Girilen metni al, boşlukları temizle
        
        if (enteredText.startsWith("cd ")+folderName) {
          const folderName = enteredText.slice(3); // "cd " önekini kaldır
          responseText.innerHTML = "root@user : /" + folderName;
        } else {
          errorText.textContent = "Geçersiz komut!"; // Hata mesajı göster
        }
        
        textArea.value = ""; // Metin alanını temizle
      }
    });
  });
  