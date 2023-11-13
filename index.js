function openDialog() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('dialog-box').style.display = 'block';
  }

  function setCountdown() {
  const dateInput = document.getElementById('date').value;
  const timeInput = document.getElementById('time').value;

  // Check if date and time inputs are not empty
  if (dateInput.trim() === '' || timeInput.trim() === '') {
    alert('Please enter both date and time.');
    return;
  }

  const [day, month, year] = dateInput.split('/');
  const [hours, minutes, seconds] = timeInput.split(':');

  const countdownDate = new Date(`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`).getTime();

  document.getElementById('overlay').style.display = 'none';
  document.getElementById('dialog-box').style.display = 'none';

  updateCountdown(countdownDate);
}


  function updateCountdown(countdownDate) {
    const x = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "EXPIRED";
      }
    }, 1000);
  }