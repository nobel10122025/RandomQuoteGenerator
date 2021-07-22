quotes=[
    '"Life is what happens when you\'re busy making other plans." - John Lennon',
    '"Get busy living or get busy dying." - Stephen King.',
    '"You only live once, but if you do it right, once is enough." - Mae West.',
    '"Many of life’s failures are people who did not realize how close they were to success when they gave up." - Thomas A. Edison',
    '"If you want to live a happy life, tie it to a goal, not to people or things." - Albert Einstein',
    '"Never let the fear of striking out keep you from playing the game." - Babe Ruth',
    '"Money and success don’t change people; they merely amplify what is already there." - Will Smith',
    '"Not how long, but how well you have lived is the main thing." - Seneca',
    '"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it." - Henry Ford',
    '"The big lesson in life, baby, is never be scared of anyone or anything." - Frank Sinatra',
    '"Life is not a problem to be solved, but a reality to be experienced." - Soren Kierkegaard'
]

colors=['#FF00BF','#FF00BF','green','violet','tomato','#F9629F','#1d1160','#662d91','#452c63','#720e9e','#AA0000','#800020','teal']
function Quotes()
{   let quotenumber=Math.floor(Math.random()*quotes.length)
    //console.log(quotes[quotenumber])
    let colornumber = Math.floor(Math.random()*colors.length)
    //document.getElementById('quote').innerText=quotes[quotenumber]
    for(var i=0; i<quotes[quotenumber].length;i++)
    {   //console.log(quotes[quotenumber][i])
        if(quotes[quotenumber][i]=='-')
        {
            break
        }
    }
    // console.log(i)
    // console.log(quotes[quotenumber].slice(i+1,quotes[quotenumber].length))
    document.getElementById('quote').innerText=quotes[quotenumber].slice(0,i-1)
    document.getElementById('author').innerText=quotes[quotenumber].slice(i+1,quotes[quotenumber].length)
    document.getElementById('quote').style.color = colors[colornumber]
    document.getElementById('author').style.color= colors[colornumber]
    document.body.style.backgroundColor = colors[colornumber]; 
    document.getElementById('button').style.background = colors[colornumber]
    document.getElementById('link').style.color = colors[colornumber]
}