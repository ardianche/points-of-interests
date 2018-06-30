<template src="./result-card.html"></template>
<style>
.containerOf {
	background-color: transparent;
	border:1px solid whitesmoke;
	border-radius: 2px;
	color:white;
	font-weight: 700;
	padding:20px;
	cursor:pointer;
}
.containerOf:hover{
	background-color:whitesmoke;
	color:black;
	opacity:0.8;
}

.actual-result{
	display:flex;
	flex-direction: column;
	align-items: center;
}

.actual-result > img{
	max-width: 40px;
	max-height: 40px;

}
</style>
<script src="./result-card.js"></script>
