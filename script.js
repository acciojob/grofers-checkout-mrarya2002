const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const priceCells = document.querySelectorAll(".prices");

  // convert NodeList into numbers and sum them
  let total = 0;
  priceCells.forEach(cell => {
    total += Number(cell.innerText);
  });

  // create a new row for total
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.colSpan = 2; // span across both columns
  td.innerText = `Total Price = Rs ${total}`;

  tr.appendChild(td);

  // append row to the table
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

