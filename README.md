# VENDING MACHINE 

We have build the vending machine where user can insert a coin and get back the desired drink. The drink in the vending machine can purchased and refund.

# Specification 

1. Three items are available at the moment [COKE,DEW,PEPSI] having default quantity and default cash. 

2. If user entered coin is less than the items price than the machine cannot processed further. If the entered coin is greater    than the items cost than the return is calculated and return the change/remaining balance.

3. If the purchase items is decreased than cash bank should increased and when the user refund the item, items quantity should increased and cash should decreased.

4. User can return items using Reference Code which is provided while purchasing items.

5. we have handled the following cases:
    a. machine are out of items and 
    b. machine is out of coins

6. Default coin/cash bank is 100

# Assumption
- To return the product/items user must have token(refCode) to verify if the returned items is brought from this vending machine.
- Items are stored in a default array without requesting from body.
- Makes one default route to load the items in machine
- If user order quantities are more than a quantity that the machine have at that time we must be able to sale the quantities that machine have.
- If there is returned money is greater than the money in cash bank than the purchased request is rejected but this issue can be fixed by adding coupan for remaining money.

# Technology Used
- React 
- Routing with react-router-dom 
-FromHandling with react-hooks-form 
- Api calling using axios & Api implementation 
- Chakra UI for design 
- react-toastify for message popup
- condentional rendering

# Screenshots

# Home panel
![home](https://user-images.githubusercontent.com/76931757/165047569-00c936f9-35bd-479b-a201-8920133e9c9e.png)

# Purchase Panel
![purpanel](https://user-images.githubusercontent.com/76931757/165047627-6042242e-84ab-4f4b-b7db-5be31fdc01d6.png)

# Purchase Success
![purchase success](https://user-images.githubusercontent.com/76931757/165047593-5df6d124-ffa0-40ba-9530-2870ee3cf531.png)

# Purchase failed due to insufficient balance
![insufficient](https://user-images.githubusercontent.com/76931757/165047608-d67be524-21f6-463f-a03f-0ad7e57fcf3c.png)

# Items Refund
![refunded](https://user-images.githubusercontent.com/76931757/165047636-d13b0ae5-eba9-4432-b0b7-d9e1575fe3b7.png)

# Items refund failed while using same ref. code that the item is already refunded
![refund fail](https://user-images.githubusercontent.com/76931757/165047645-f2de2991-092a-4279-a643-2bc68b14cb28.png)

