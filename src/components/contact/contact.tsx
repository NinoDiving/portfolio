import ScrollReveal from "../framer/scrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center mt-10 pt-5 background-contact"
    >
      <ScrollReveal delay={0.1}>
        <h1 className="text-5xl text-center text-blue shadow-text">
          Contact-Me
        </h1>
      </ScrollReveal>
      <form action="">
        <div className="flex flex-col items-center justify-center w-full gap-2 p-4">
          <ScrollReveal delay={0.3}>
            <label htmlFor="name" className="text-xl ">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 rounded border border-black w-full max-w-md"
              required
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <label htmlFor="email" className="text-xl ">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 rounded border border-black w-full max-w-md"
              required
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <label htmlFor="message" className="text-xl ">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="p-2 rounded border border-black w-full max-w-md"
              required
            ></textarea>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <button
              type="submit"
              className="border-blue border-1 mt-3 p-2 rounded animate-colorIn"
            >
              Send Message
            </button>
          </ScrollReveal>
        </div>
      </form>
    </section>
  );
}
