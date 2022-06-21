var wrapper = document.createElement('div');
wrapper.setAttribute('class',"container");
document.body.appendChild(wrapper);

var row = document.createElement('div');
row.setAttribute('class',"row");
wrapper.appendChild(row);

var carousel = document.createElement('div');
carousel.setAttribute('id',"owl-example");
carousel.setAttribute('class',"owl-carousel");
row.appendChild(carousel);

var products = [
    {
        img: "Wildcraft bag.jpg",
        cat: "Bags",
        cost: "60-95%+Extra 50%",
        brands: "Wildcraft sanchi",    
    },
    {
        img: "GAP.jpg",
        cat: "GAP Sweatshirts",
        cost: "60-95%+Extra 50%",
        brands: "GAPS",    
    },
     {
        img: "Bottles.jpg",
        cat: "Water Bottles",
        cost: "$25",
        brands: "Water Bottles",    
    },
    {

        img : "vivo.jpeg",
        cat : "phone",
        brands : "vivo s1",  
        cost : "20,000" , 
    },
    {
        img: "chocolates.jpeg",
        cat: "Chocolates",
        cost: "Extra 7% Off",
        brands: "Cadbury,Nestle & More",    
    },
    {
        img: "flipflops.jpg",
        cat: "flipflops",
        cost: "500/-",
        brands: "Bewakoof",    
    },
    {
        img: "Laptops.jpg",
        cat: "electronics",
        cost: "₹29,790.00 INR*",
        brands: "HP",    
    },
    {
        img: "wallclocks.jpeg",
        cat: "Wallclocks",
        cost: "From $99",
        brands: "Ajanta & More",    
    },
  
]
var count = document.getElementById('owl-example');
var prod = "";
for (product of products){
    prod += "<div class='col'><img src='images/"+product.img+"'><div class='cat'>"+product.cat+"</div><div class='cost'>"+product.cost+"</div><div class='brands'>"+product.brands+"</div></div>"
}
count.innerHTML = prod;

$(document).ready(function() {
 
    $("#owl-example").owlCarousel({
        itemsDesktop : [1499,4],
        itemsDesktopSmall : [1199,3],
        itemsTablet : [899,2],
        itemsMobile : [599,1],
        navigation : true,
        navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
    });
    
  });