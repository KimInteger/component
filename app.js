const a = (name, age, job) => {
  return{
    name :name,
    age : age,
    job : job
  };
};

// console.log(a());

const b = a("인티저", 29, "정수");
console.log("첫번째 : ", b);
b.address = '대전';
console.log("두번째 : ",b);