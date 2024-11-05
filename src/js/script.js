document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var crm = document.getElementById('CRM');
    var uf = document.getElementById('UF');
    var formValid = true;

    if (!crm.value) {
      crm.classList.add('is-invalid');
      document.getElementById('error-crm').style.display = 'block';
      formValid = false;
    } else {
      crm.classList.remove('is-invalid');
      document.getElementById('error-crm').style.display = 'none';
    }
  

    if (!uf.value) {
      uf.classList.add('is-invalid');
      document.getElementById('error-uf').style.display = 'block';
      formValid = false;
    } else {
      uf.classList.remove('is-invalid');
      document.getElementById('error-uf').style.display = 'none';
    }
  
  
    if (formValid) {
      this.submit();
    }
  });

function showSuccessMessage() {
    var message = document.getElementById('success-message');
    message.style.display = 'flex';
    
    setTimeout(function() {
      message.style.display = 'none';
    }, 5000);
  }
  
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    showSuccessMessage();
  });
  
  
  