interface Tweet {
  contents: string;
  id: string;
}
async function main(userId: string) {
  const newTweets: Tweet[] = await getTweets(userId);
  for (tweet of newTweets) {
    const tokenAddress = await getTokenFromLLM(tweet.contents)
    if(tokenAddress){
        const txn =await createSwapInstruction();
        for (let i=0;< SPAM_COUNT; i++){
            sendTxn(txn)
        }
    }
  }
}
main();
