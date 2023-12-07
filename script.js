document.addEventListener("DOMContentLoaded", function() {
  // Fetch JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Update HTML elements one by one by ID
      document.getElementById('data1').innerText = data.data1;
      document.getElementById('data2').innerText = data.data2;
      document.getElementById('data3').innerText = data.data3;
      document.getElementById('data4').innerText = data.data4;

      // forEach loop to update td elements inside of the HTML - best way 
      Object.keys(data).forEach(id => {
        const tdElement = document.getElementById(id);

        if (tdElement) {
          tdElement.textContent = data[id];
        }
      });
    })
    .catch(error => console.error('Error loading JSON:', error));
});
