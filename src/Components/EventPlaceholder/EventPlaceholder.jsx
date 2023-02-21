export const EventPlaceholder = () => {
  return (
    <div className="event grid md:grid-cols-2 rounded-lg border border-primary m-5 p-10 w-90 md:w-1/2  md:grid-flow-dense">
      <div className="event-plac w-64 mb-4 md:mb-0">
        <img
          src="https://picsum.photos/400"
          alt="EventArt"
          className="self-center"
        />
      </div>
      <div className="event-info w-full md:text-left justify-center">
        <h1 className="text-3xl">Title</h1>
        <h3 className="text-xl">Tagline</h3>
        <h3 className="text-xl mt-5">Description:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          aperiam voluptatem nesciunt accusamus amet, veniam sunt rem soluta
          possimus corporis tenetur temporibus velit, autem eaque architecto
          nobis tempora officiis molestiae.
        </p>
      </div>
    </div>
  );
};
