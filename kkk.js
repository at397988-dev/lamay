/**const scene = new THREE.Scene();
/  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 3000;

  const posArray = new Float32Array(particleCount * 3);

  for(let i = 0; i < particleCount * 3; i++){
    posArray[i] = (Math.random() - 0.5) * 20;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00ffff
  });

  const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleMesh);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    particleMesh.rotation.y += 0.001;
    particleMesh.rotation.x += 0.0005;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });*/
  let cards = document.querySelectorAll('.card');
  let card1 = document.querySelectorAll('anime');
  
cards.forEach(card => {
    card.addEventListener("animationend", () => {
        card.style.display = "none";
        card1.addEventListener("animationend",() =>{
          card1.style.display = "none";
       
        })

    });
});

タマン
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {

    if (data.success) {
      document.getElementById("result").innerText = "Message Sent Successfully!";
      form.reset();
    } else {
      document.getElementById("result").innerText = "Something went wrong!";
    }

  })
  .catch(error => {
    document.getElementById("result").innerText = "Network Error";
  });

});