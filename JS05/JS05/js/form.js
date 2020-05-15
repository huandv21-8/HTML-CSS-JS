
var elForm, elSelectpackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectpackage = document.getElementById('package');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');
elPackageHint = document.getElementById('packageHint');

function packageHint(){
  var pack = this.options[this.selectedIndex].value;
  if(pack==='monthly')
  {
    elPackageHint.innerHTML = 'Neu chon 1 year thi se saving $20';
  }else {
    elPackageHint.innerHTML ='Lua chon chinh xac';
  }
}
function checkTerms(event){
  if(!elTerms.checked){
    elTermsHint.innerHTML ='Ban phai dong y thi moi duoc di tiep';
    event.preventDefault();
  }
}
elForm.addEventListener('submit',checkTerms,false);
elSelectpackage.addEventListener('change',packageHint,false);
