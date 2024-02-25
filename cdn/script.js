// Define an object with category names and corresponding video sources
// var videos = {
//   women: [
//     "https://www.youtube.com/embed/tgbNymZ7vqY",
//     "https://www.youtube.com/embed/tgbNymZ7vqY",
//     "https://www.youtube.com/embed/tgbNymZ7vqY",

//   ],

// };

// function showVideos(category) {
//     var panel = document.getElementById("panel");
//     var videoSources = videos[category];

//   if (videoSources && videoSources.length > 0) {

//     var iframes = videoSources.map(function (src) {
//       return '<iframe width="350" height="315" src="' + src + '"></iframe>';
//     });

//     panel.innerHTML = iframes.join("");
//     panel.style.display = "block";
//   } else {

//     panel.innerHTML = "No videos available for this category.";
//     panel.style.display = "block";
//   }
// }
// var videos = {
//   women: [
//     "https://www.youtube.com/embed/aAxGTnVNJiE?si=_VwqpMfVMiF_AlBj",
//     "https://www.youtube.com/embed/EI6Fwzk_szU?si=q0dui5OBgqittwNf",
//     "https://www.youtube.com/embed/LQpLlblu0J8?si=UnsV8bAKSuDZi30g",
//     "https://www.youtube.com/embed/OhabUpkLpL4?si=L5IK7r_pmj9uvGDF",
//     "https://www.youtube.com/embed/1RVpySU0aDM?si=zt9AApTN5IpZxKYx",
//     "https://www.youtube.com/embed/Fhe0advzlzo?si=Td99BUtQ331WiOJ8",
//     "https://www.youtube.com/embed/NZwA65LySOY?si=Qwl3NzaA2yjhLZtZ",
//     "https://www.youtube.com/embed/qw5h46bz-Sg?si=6xCQPqL2sGVn48yh",
//     "https://www.youtube.com/embed/LRxZVuQlWdM?si=Zcc2i_9ksipP_HvD",
//   ],
// };
// function showVideos(category) {
//   console.log("Clicked on " + category); // Add this line for debugging
//   var panel = document.getElementById("panel");
//   var videoSources = videos[category];

//   if (videoSources && videoSources.length > 0) {
//     // Generate iframe elements for each video source
//     var iframes = videoSources.map(function (src) {
//       return '<iframe width="350" height="315" src="' + src + '"></iframe>';
//     });

//     // Set the content of the panel
//     panel.innerHTML = iframes.join("");
//     panel.style.display = "block";
//   } else {
//     // No videos found for the category
//     panel.innerHTML = "No videos available for this category.";
//     panel.style.display = "block";
//   }
// }

// //men

// var videos = {
//   men: [
//     "https://www.youtube.com/embed/lBoyhNBfHz0?si=1PMmH3KHkksq8uh1",
//     "https://www.youtube.com/embed/2cr8A5GIy9Y?si=g-wGiq-MI-xmMfAI",
//     "https://www.youtube.com/embed/J9FgTYSfDEk?si=TroZJb731jpH-ouZ",
//     "https://www.youtube.com/embed/9xwUAw9XYDk?si=KnAhLaV88Q-tHv5X",
//     "https://www.youtube.com/embed/MxXgcVJmmAw?si=LtZwNYk4kutsfbGW",
//     "https://www.youtube.com/embed/H77kk7hSqZ4?si=mXTRLPc5AoOdXSOn",
//     "https://www.youtube.com/embed/Fhe0advzlzo?si=Td99BUtQ331WiOJ8",
//     "https://www.youtube.com/embed/NZwA65LySOY?si=Qwl3NzaA2yjhLZtZ",
//     "https://www.youtube.com/embed/qw5h46bz-Sg?si=6xCQPqL2sGVn48yh",
//     "https://www.youtube.com/embed/LRxZVuQlWdM?si=Zcc2i_9ksipP_HvD",
//   ],
// };
// function showVideos(category) {
//   console.log("Clicked on " + category); // Add this line for debugging
//   var panel = document.getElementById("menid");
//   var videoSources = videos[category];

//   if (videoSources && videoSources.length > 0) {
//     // Generate iframe elements for each video source
//     var iframes = videoSources.map(function (src) {
//       return '<iframe width="350" height="315" src="' + src + '"></iframe>';
//     });

//     // Set the content of the panel
//     menid.innerHTML = iframes.join("");
//     menid.style.display = "block";
//   } else {
//     // No videos found for the category
//     menid.innerHTML = "No videos available for this category.";
//     menid.style.display = "block";
//   }
// }

var videos = {
  all: [
    // Add video URLs for the "All" category
    "https://www.youtube.com/embed/9xwUAw9XYDk?si=KnAhLaV88Q-tHv5X",
    "https://www.youtube.com/embed/jWqEXfEPwbw?si=LJc1dmMJddzG8jlV",
    "https://www.youtube.com/embed/aAxGTnVNJiE?si=_VwqpMfVMiF_AlBj",
    "https://www.youtube.com/embed/_ZiMkktWBCs?si=WOuXjLJEa44syfSA",
    "https://www.youtube.com/embed/EI6Fwzk_szU?si=q0dui5OBgqittwNf",
    "https://www.youtube.com/embed/_IiRqqSsprg?si=KneUxiHnYX7oSJEy",
    "https://www.youtube.com/embed/H77kk7hSqZ4?si=mXTRLPc5AoOdXSOn",
    "https://www.youtube.com/embed/RtLtMrqVbbM?si=kLe3wqAV-VjMOREX",
    "https://www.youtube.com/embed/LQpLlblu0J8?si=UnsV8bAKSuDZi30g",
    "https://www.youtube.com/embed/BeK2x3fOaYE?si=bW8KKvq4uaSLl_Sh",
    "https://www.youtube.com/embed/6mLXV3_iQkA?si=KHbChLeFEuC1I_yW",
    "https://www.youtube.com/embed/DVJ1kxW469k?si=-L3OwNASgV5Zaxh6",
    "https://www.youtube.com/embed/dRHsg6hWcNo?si=HaDCzjsU2GhftOs_",
    "https://www.youtube.com/embed/OhabUpkLpL4?si=L5IK7r_pmj9uvGDF",
    "https://www.youtube.com/embed/1RVpySU0aDM?si=zt9AApTN5IpZxKYx",
    "https://www.youtube.com/embed/Fhe0advzlzo?si=Td99BUtQ331WiOJ8",
    "https://www.youtube.com/embed/NZwA65LySOY?si=Qwl3NzaA2yjhLZtZ",
    "https://www.youtube.com/embed/qw5h46bz-Sg?si=6xCQPqL2sGVn48yh",
    "https://www.youtube.com/embed/LRxZVuQlWdM?si=Zcc2i_9ksipP_HvD",
    "https://www.youtube.com/embed/lBoyhNBfHz0?si=1PMmH3KHkksq8uh1",
    "https://www.youtube.com/embed/2cr8A5GIy9Y?si=g-wGiq-MI-xmMfAI",
    "https://www.youtube.com/embed/J9FgTYSfDEk?si=TroZJb731jpH-ouZ",
    "https://www.youtube.com/embed/MxXgcVJmmAw?si=LtZwNYk4kutsfbGW",
  ],
  women: [
    // Add women's video URLs
    "https://www.youtube.com/embed/aAxGTnVNJiE?si=_VwqpMfVMiF_AlBj",
    "https://www.youtube.com/embed/EI6Fwzk_szU?si=q0dui5OBgqittwNf",
    "https://www.youtube.com/embed/LQpLlblu0J8?si=UnsV8bAKSuDZi30g",
    "https://www.youtube.com/embed/OhabUpkLpL4?si=L5IK7r_pmj9uvGDF",
    "https://www.youtube.com/embed/1RVpySU0aDM?si=zt9AApTN5IpZxKYx",
    "https://www.youtube.com/embed/Fhe0advzlzo?si=Td99BUtQ331WiOJ8",
    "https://www.youtube.com/embed/NZwA65LySOY?si=Qwl3NzaA2yjhLZtZ",
    "https://www.youtube.com/embed/qw5h46bz-Sg?si=6xCQPqL2sGVn48yh",
    "https://www.youtube.com/embed/LRxZVuQlWdM?si=Zcc2i_9ksipP_HvD",
  ],
  men: [
    // Add men's video URLs
    "https://www.youtube.com/embed/lBoyhNBfHz0?si=1PMmH3KHkksq8uh1",
    "https://www.youtube.com/embed/2cr8A5GIy9Y?si=g-wGiq-MI-xmMfAI",
    "https://www.youtube.com/embed/J9FgTYSfDEk?si=TroZJb731jpH-ouZ",
    "https://www.youtube.com/embed/9xwUAw9XYDk?si=KnAhLaV88Q-tHv5X",
    "https://www.youtube.com/embed/MxXgcVJmmAw?si=LtZwNYk4kutsfbGW",
    "https://www.youtube.com/embed/H77kk7hSqZ4?si=mXTRLPc5AoOdXSOn",
  ],
  students: [
    // Add students' video URLs
    "https://www.youtube.com/embed/_ZiMkktWBCs?si=WOuXjLJEa44syfSA",
    "https://www.youtube.com/embed/34tyCS9LdiQ?si=UU_wFzUv8Q52QtwZ",
    "https://www.youtube.com/embed/vVF9QyxuBRc?si=xquxV_XlQBDWlQwt",
    "https://www.youtube.com/embed/dRHsg6hWcNo?si=HaDCzjsU2GhftOs_",
    "https://www.youtube.com/embed/N5ffWWVAL5E?si=izVgyeQw7FUcBQFG",
    "https://www.youtube.com/embed/2L-PIlyTBY8?si=FmT_hyUp493LMasY",
  ],
  crafting: [
    // Add crafting video URLs
    "https://www.youtube.com/embed/_IiRqqSsprg?si=KneUxiHnYX7oSJEy",
    "https://www.youtube.com/embed/Rp6Sn1coaKk?si=RTPLMFvWnpKSqwzO",
    "https://www.youtube.com/embed/WiIFUNDl3eM?si=2BVsR6jt-zK1XdQS",
    "https://www.youtube.com/embed/BR4e7PvtECY?si=gPMWy2hEJTI_mnhp",
    "https://www.youtube.com/embed/kxioWGoPleM?si=Hn5KjJoBvAcLLNxN",
  ],
  socialmedia: [
    // Add social media video URLs
    "https://www.youtube.com/embed/lMaiUFs5RoA?si=BR68oRIdSe-xYz8O",
    "https://www.youtube.com/embed/-LhLmKIytLE?si=q-CIEAiPQctoKZIe",
    "https://www.youtube.com/embed/jwc2ZefibaA?si=rXIOLabEtjiWtrLn",
    "https://www.youtube.com/embed/jWqEXfEPwbw?si=LJc1dmMJddzG8jlV",
    "https://www.youtube.com/embed/W_-cz-_AsHw?si=SWnIBXGw6VuvelYW",
    "https://www.youtube.com/embed/BOLo5CVa4fs?si=0-d5H6y8pP34FJCm",
  ],
  contentwriting: [
    // Add content writing video URLs
    "https://www.youtube.com/embed/5jioCkBRRlw?si=2u0mjg10UpTkzuGn",
    "https://www.youtube.com/embed/y-j2MyDGmJI?si=Rp_y6ddeS3WiLtQO",
    "https://www.youtube.com/embed/sjuj4f0lI-s?si=5mPV9kUJNMpWBJGf",
    "https://www.youtube.com/embed/RKOQew8JlQo?si=JaYLejIWgAGBTTBx",
    "https://www.youtube.com/embed/FmvHiODsqZk?si=LNMRh4bkznq01Fzk",
    "https://www.youtube.com/embed/BeK2x3fOaYE?si=bW8KKvq4uaSLl_Sh",
    "https://www.youtube.com/embed/6mLXV3_iQkA?si=KHbChLeFEuC1I_yW",
  ],
  graphicdesigning: [
    // Add graphic designing video URLs
    "https://www.youtube.com/embed/RtLtMrqVbbM?si=kLe3wqAV-VjMOREX",
    "https://www.youtube.com/embed/EbiD1ZJoy_s?si=v61ra0Mlgfmh7kzV",
    "https://www.youtube.com/embed/ivaKTzW_-KM?si=BQ6UBwOEbj1v0PGY",
    "https://www.youtube.com/embed/ikl7HJLlU0A?si=-BlVe-Kmr374-fNL",
    "https://www.youtube.com/embed/f2LouMTIDtM?si=dfg86AY7R5o9nayD",
    "https://www.youtube.com/embed/BhrV3Tsa1_0?si=Pjx3z3PpBxUoQMlo",
  ],
  onlineearning: [
    // Add online earning video URLs
    "https://www.youtube.com/embed/Aqin0l-TmNQ?si=QIcjIIo4RLzHjUVv",
    "https://www.youtube.com/embed/KbbxkH2WaJI?si=UyTsXZy3J9OYJYsQ",
    "https://www.youtube.com/embed/zmw7OXf39rQ?si=OjrHa53dR8no8zgg",
    "https://www.youtube.com/embed/DVJ1kxW469k?si=-L3OwNASgV5Zaxh6",
    "https://www.youtube.com/embed/dRHsg6hWcNo?si=HaDCzjsU2GhftOs_",
    "https://www.youtube.com/embed/1AxjxjkTpQU?si=p9V3DfhbiMPc9y0j",
  ],
};

function showVideos(category) {
  console.log("Clicked on " + category); // Add this line for debugging
  var panel = document.getElementById("panel");
  var videoSources = videos[category];

  if (videoSources && videoSources.length > 0) {
    // Generate iframe elements for each video source
    var iframes = videoSources.map(function (src) {
      return '<iframe width="350" height="315" src="' + src + '"></iframe>';
    });

    // Set the content of the panel
    panel.innerHTML = iframes.join("");
    panel.style.display = "block";
  } else {
    // No videos found for the category
    panel.innerHTML = "No videos available for this category.";
    panel.style.display = "block";
  }
}
