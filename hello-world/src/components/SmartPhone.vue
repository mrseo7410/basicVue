<template>
  <h1>스마트폰 월 예상납부금액 환산</h1>
  <br/>
  <span>폰이름 : </span><input type="text" ref="phone">
  <br/>
  <span>출고가 : </span><input type="text" ref="price">
  <br/>
  <span>월통신요금 : </span><input type="text" ref="monthPay">
  <br/>
  <br/>
  <button @click="chkMoney">예상금액 계산하기</button>
  <br/>
  <br/>
  <br/>
  <div>
    <span>폰 이름 : {{ phone }} </span>
    <br/>
    <span>출고가 : {{ price }}</span>
    <br/>
    <span>월 할부금액 : {{ monthBill }}</span>
    <br/>
    <span>월 통신요금 : {{ monthPay }}</span>
    <br/>
    <span>할부수수료 : {{ interest }}%</span>
    <br/>
    <br/>
    <span>월 예상 납부금액 : {{ total }}</span>
  </div>
</template>

<script>
export default {
    data() {
        return{
            phone : '',
            price : '',
            monthPay : '',
            interest : '',
            monthBill : '',
            total : ''
        }
    },
    methods: {
        chkMoney() {
            const phone = this.$refs.phone.value;
            const price = parseInt(this.$refs.price.value);
            const monthPay = parseInt(this.$refs.monthPay.value);
            const interest = 0.059/12;
            const afterInterest = Math.pow(1+interest, 24);

            // 월 할부금액 = ( 출고가 * 월할부이율 * ( 1 + 월할부이율)의 24승 / ( ( 1 + 월할부이율)의 24승 - 1) )
            const monthBill = Math.round( (price * interest * afterInterest  / ( afterInterest - 1)) );

            this.phone = phone;
            this.price = price;
            this.monthPay = monthPay;
            this.interest = 5.9;
            this.monthBill = monthBill;
            this.total = monthBill + monthPay + "원";

        }
    }
}
</script>

<style>

</style>