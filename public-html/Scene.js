import React from "react";

class Scene extends React.Component {
  render() {
    const character = this.props.character;

    const isSimba = character === "Simba";
    console.log("is Simba " + isSimba);
    console.log("type " + typeof isSimba);

    const isSarabi = character === "Sarabi";
    console.log("is Sarabi " + isSarabi);

    const isMufasa = character === "Mufasa";
    console.log("is Mufasa " + isMufasa);

    return (
      <div>
        <div className="fullscript">
          <h1>We Are All Connected</h1>
          <h2 className="script">
            <label
              style={{
                color: isSimba === true ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            Dad, you awake? Dad, wake up! Dad! Dad, Dad, Dad!
            <br />
            <br />
            <label
              style={{
                color: isSarabi === true ? "yellow" : "blue",
              }}
            >
              Sarabi:
            </label>
            Your son's awake.
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            Before sunrise, he's your son.
            <br />
            <br />
            <label
              style={{
                color: isSimba ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            Come on, Dad, let's go. You said I could patrol with you today. And
            today has started. You promised! You up? Let's do this!
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            Let's do this.
            <br />
            <br />
            <label
              style={{
                color: isSimba ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            So, what's first? Give orders for the hunt? Chase away evil
            intruders? Dad! You're going the wrong way! Dad? I'm not supposed to
            go up here.
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            Look, Simba. Everything the light touches is our kingdom.
            <br />
            <br />
            <label
              style={{
                color: isSimba ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            You rule all of that?
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            Yes. But a king's time as ruler... rises and falls like the sun. One
            day, Simba... the sun will set on my time here... and will rise with
            you as the new king.
            <br />
            <br />
            <label
              style={{
                color: isSimba ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            All of this will belong to me?
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            It belongs to no one, but will be yours to protect. A great
            responsibility.
            <br />
            <br />
            <label
              style={{
                color: isSimba ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            Everything the light touches? Those trees? And the watering hole?
            And that mountain? And beyond those shadows?
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            You must not go there, Simba.
            <br />
            <br />
            <label
              style={{
                color: isSimba ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            But I thought a king could do whatever he wants. Take any territory.
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            While others search for what they can take... a true king searches
            for what he can give. Everything you see exists together in a
            delicate balance. As king, you need to understand that balance...and
            respect all the creatures... from the crawling ant to the leaping
            antelope.
            <br />
            <br />
            <label
              style={{
                color: isSimba ? "yellow" : "blue",
              }}
            >
              Simba:
            </label>
            But, Dad, don't we eat the antelope?
            <br />
            <br />
            <label
              style={{
                color: isMufasa ? "yellow" : "blue",
              }}
            >
              Mufasa:
            </label>
            Yes, Simba. But let me explain. When we die, our bodies become the
            grass... and the antelope eat the grass... and so we are all
            connected in the great circle of life.
          </h2>
        </div>
      </div>
    );
  }
}
export default Scene;
