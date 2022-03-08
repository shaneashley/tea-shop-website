const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Alison S.',
    position: 'London',
    photo:
      'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text:
      "Recently walked into this place heading to the English Market from the Clayton hotel. I would never write a review about a coffee shop but in this case the service was so crazy good and the food was excellent. Well worth the visit."
  },
  {
    name: 'Betty L.',
    position: 'Cardiff',
    photo: 'https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80',
    text:
      "I fell in in love with this cute café and its staff the first time I popped in. Vast variety of snacks and beverages, vegetarian option available, very nice and welcoming atmosphere.",
  },

  {
    name: 'Inez P.',
    position: 'Manchester',
    photo: 'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    text:
      "Lovely quaint place away from branded plastic shops. More this sort of thing please. Papers available and a set of books also if you fancy a long read.",
  },
  {
    name: 'Marjorie M.',
    position: 'Greenwich',
    photo: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    text:
      "They made a great cappuccino that was customized. This is not a dessert place but boutique coffee shop with some food. The barista was very friendly and made a great cup. Great morning stop in Cork.",
  }
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 4000)





const targetDiv = document.getElementById("our__specialty__two");
const btn = document.getElementById("tea__btn");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};




const targetDivTwo = document.getElementById("our__specialty__three");
const btnTwo = document.getElementById("coffee__btn");
btnTwo.onclick = function () {
  if (targetDivTwo.style.display !== "none") {
    targetDivTwo.style.display = "none";
  } else {
    targetDivTwo.style.display = "block";
  }
};

const targetDivThree = document.getElementById("our__specialty__four");
const btnThree = document.getElementById("pastries__btn");
btnThree.onclick = function () {
  if (targetDivThree.style.display !== "none") {
    targetDivThree.style.display = "none";
  } else {
    targetDivThree.style.display = "block";
  }
};