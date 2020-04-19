/*
export function someMutation (state) {
}
*/

export function checkVoucher (state, {code}) {
    //console.log(state.listVoucher[0])
    state.currentVoucher = null;

    var last_voucher = null;

    for(let i=0; i < state.listVoucher.length; i++){
        if(state.listVoucher[i].voucher_code === code){
            //alert('ada');
            last_voucher = state.listVoucher[i];
        }
    }

    state.currentVoucher = last_voucher;
}