const apiKey = "d00e702fbf2141ec8688fcb9e29430f4";
const blog_container = document.getElementById("blog-container");
const search=document.getElementById("seachinput")
const seachbtn=document.getElementById("searchBtn")

async function fetchRandm() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data); // moved above return
    return data.articles;
  } catch (error) {
    console.error("Error Fetching data", error);
    return [];
  }
}

seachbtn.addEventListener("click", async()=>{
   const query=search.value.trim()
  if(query !==""){
    try {
      const articles=await fetchNews(query)
      displayBlogs(articles)
    } catch (error) {
      console.log("error occured  by input location",error)
    }
  }
})
//displaying user input news
 async function fetchNews(query){
   try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&language=en&pageSize=15&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data); // moved above return
    return data.articles;
  } catch (error) {
    console.error("Error Fetching data", error);
    return [];
  }
}

//displaying random news
function displayBlogs(articles) {
  blog_container.innerHTML = "";
  if (!Array.isArray(articles)) {
    console.error("Articles is not an array");
    return;
  }

  articles.forEach(article => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blogCard");

    const img = document.createElement("img");
    img.src = article.urlToImage || "https://via.placeholder.com/150";
    img.alt = article.title;

    const title = document.createElement("h2");
    const truncatedTitle=article.title.length > 30 ? article.title.slice(0,30)+"....." :article.title
    title.textContent=truncatedTitle

    const description = document.createElement("p");
    description.textContent = article.description;
   

    const btn=document.createElement("button")
    btn.textContent="know more"
    btn.classList.add("Knowbtn")

    blogCard.appendChild(btn)
    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);

    blogCard.addEventListener("click",()=>{
      window.open(article.url,"_blank")
    })
    blog_container.appendChild(blogCard);
  });
}

(async () => {
  try {
    const articles = await fetchRandm();
    console.log(articles);
    displayBlogs(articles);
  } catch (error) {
    console.error("Error Displaying Blogs", error);
  }
})();
