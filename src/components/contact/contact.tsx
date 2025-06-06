export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center mt-10 pt-5 background-contact"
    >
      <h1 className="text-5xl text-center text-blue shadow-text">Contact-Me</h1>
      <form action="">
        <div className="flex flex-col items-center justify-center w-full gap-2 p-4">
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

          <button
            type="submit"
            className="border-blue border-1 mt-3 p-2 rounded animate-colorIn"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
