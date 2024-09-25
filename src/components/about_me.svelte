<script>
  const title =
    "Hello and welcome! I'm so glad you're here. Here is a bit about me:";
  const body = [
    "I am a licensed clinical social worker in Pennsylvania working virtually. I work with adults with a wide range of concerns including depression, anxiety, identity exploration, and painful events or memories. I have particular experience and interest in relationships and attachment, perinatal mental health and early parenthood, and early adulthood transitions. My style in session is warm, engaging, collaborative, and conversational. I strive to create an affirming, nonjudgmental, and safe environment and encourage dialogue about our work together.",
    "I received my master's in social work from Bryn Mawr College. My experience spans community behavioral health, college counseling, and private practice settings. Prior to becoming a therapist, I studied the humanities and worked in the higher education and nonprofit worlds.",
    "Please reach out with any questions about my background or approach! I offer a free consultation -- I know that searching for a therapist can be tough work and that finding the right fit is something you must experience in conversation.",
  ];
</script>

<div
  uk-scrollspy="target: .content; cls: uk-animation-slide-left-medium; delay: 250;"
>
  <section class="body-content">
    <article class="content uk-article">
      <h1 class="title uk-article-title" id="about">{title}</h1>
      <p>
        {body[0]}
      </p>
      <p>
        {body[1]}
      </p>
      <p>
        {body[2]}
      </p>
    </article>
  </section>
</div>

<style>
  * {
    margin: 0%;
    padding: 0;
    border: 0;
    outline: 0;
    background-color: #d7e5ea;
    vertical-align: baseline;
  }

  .body-content {
    margin: 0% 2%;
    padding: 2%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .title {
    max-width: 65ch;
    font-size: 2em;
    border-bottom: solid 2px rgba(170, 185, 173, 0.75);
    font-family: "brandon-grotesque";
  }

  p {
    max-width: 75ch;
    font-size: 1.25em;
    margin: 1em 0%;
  }
</style>
