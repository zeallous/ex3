function capitalizeLetters(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// NOTE: -> for you to know whether you've written the right code, the log below should be true.

//capitalizeLetters(capitalizeLetters("hi there") === "Hi There");