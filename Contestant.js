class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }
ll("red"); 
   }
 
  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
  for(var plr in allContestants){
    var correctAns = "2";
    if(correctAns === allConestants[plr].answer)
      fill("Green")
    else
      fill("red");
}
