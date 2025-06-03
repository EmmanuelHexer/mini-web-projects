const testimonials = [
  {
    username: "John Doe",
    text: "This product exceeded my expectations. Highly recommended!",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60",
  },
  {
    username: "Alex Smith",
    text: "A seamless experience from start to finish.",
    photoUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
  },
  {
    username: "Mary Ann",
    text: "Beautiful design and excellent user experience.",
    photoUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
  },
  {
    username: "Tom Harris",
    text: "Incredible value for the price. I'm very happy!",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonials() {
  const { username, text, photoUrl } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  username.innerText = username;

  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonials();
  }, 1500);
}

updateTestimonials();
