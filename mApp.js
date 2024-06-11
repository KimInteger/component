    
    const app = () => {
      let name = [];
      names.forEach((item)=>{
        if (item === "김정수") {
          return name.push(tagComponent("h1", item, "h1"));
        } else {
          if(item[0] === '이' ){
            console.log(typeof(item));
            return name.push(tagComponent("p style='color:blue'",item,"p"));
          } else {
            return name.push(tagComponent("p", item,"p"));
          }
        }
      });
      return name.join('');
    };