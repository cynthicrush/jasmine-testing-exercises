
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 70000, years:20, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('461.97');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 77777, years:20, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('513.29');
});

/// etc
