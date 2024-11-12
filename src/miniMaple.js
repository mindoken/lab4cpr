class MiniMaple {

  diff(string, variable){
      let items = string.replace(/[ *^]/g,'').split(/[-+]/g)
      let signs = Array.from(string.replaceAll(/[^+-]/g, ""))
      let ans = ''
      if (items[0] === '') {
          ans += '-'
      }
      items.forEach((item, key) => {
          if(item.indexOf(variable) >= 0){
              let number = item.split(variable)[0]
              let pow = item.split(variable)[1]
              item = ""
              if (number && pow) {
                  number *= pow;
                  item += `${number}*`
              } else {
                  if (number){
                      item += number
                  } else {
                      if (pow){
                          item += `${pow}*`
                      }
                      else{
                          item += 1
                      }
                  }
              }
              if (pow){
                  pow--
                  if (pow > 1) {
                      item += `${variable}^${pow}`
                  }
                  else item += variable
              }
          }
          else {
              item = ""
          }
          if (item != "") {
              ans += item + signs[key]
          }
      });
      ans = ans.replace(/[+-]$/,'').replace('undefined','')
      return ans !== '' ? ans : '0'
  }
}

export {MiniMaple}