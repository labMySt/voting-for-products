export default function (state) {
  var filteredProd = [];
  const { filters, products } = state;
   for(var item of products) {
    if(item.categories.filter((value)=>value === filters).length > 0)
    filteredProd.push(item);
   }
   console.log("list", filteredProd)
 return filteredProd;
}
