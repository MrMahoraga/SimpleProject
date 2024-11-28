let a = "bannana";
let b ="";
for ( i = 0; i<a.length; i++)
{
  if(a[i]== 'n' ){
    b=b+'@';
  }
  else{
    b=b+a[i]
  }
}
console.log(b);