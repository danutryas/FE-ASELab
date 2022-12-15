const MemberCard = ({ tag, name, gen }) => {
  return (
    <div className="rounded-lg bg-white w-72 inline-block mx-5">
      <img
        className="rounded-t-lg max-h-52 w-full object-cover "
        src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        alt="people"
      />
      <div className="card-container p-4 flex flex-col gap-4 pb-9 whitespace-normal">
        <div className="rounded-md py-1 px-2 w-fit text-center" style={{ backgroundColor: '#E7E5E5', minWidth: '100px' }}>
          <p className="font-medium text-gray-600">{tag}</p>
        </div>
        <p className="font-medium text-xl leading-7">{name}</p>
        <p className="text-gray-600">Generation {gen}</p>
      </div>
    </div>
  );
};

const EventCard = ({ eventType, eventName, date, eventTag }) => {
  return (
    <div className="rounded-lg bg-white w-72 inline-block mx-5">
      <img
        className="rounded-t-lg max-h-52 w-full object-cover "
        src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="tech"
      />
      <div className="card-container p-4 flex flex-col gap-4 pb-9 whitespace-normal">
        <div className="rounded-md py-1 px-2 w-fit text-center" style={{ backgroundColor: '#E7E5E5', minWidth: '100px' }}>
          <p className="font-medium text-gray-600">{eventTag}</p>
        </div>
        <p className="font-medium text-xl leading-7">{eventName}</p>
        <p className="text-gray-600">{eventType}</p>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  );
};

const ProductCard = ({ eventCategory, eventTitle, eventBy, eventDesc }) => {
  return (
    <div className="rounded-lg bg-white w-80 md:inline-block mx-5">
      <img
        className="rounded-t-lg max-h-52 w-full object-cover "
        src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="tech"
      />
      <div className="card-container p-4 flex flex-col gap-4 pb-9 whitespace-normal">
        <div className="rounded-md py-1 px-2 w-fit text-center" style={{ backgroundColor: '#E7E5E5', minWidth: '100px' }}>
          <p className="font-medium text-gray-600">{eventCategory}</p>
        </div>
        <p className="font-medium text-xl leading-7">{eventTitle}</p>
        <p className="text-gray-600">{eventBy}</p>
        <p className="text-gray-600">{eventDesc}</p>
      </div>
    </div>
  );
};

export { MemberCard, EventCard, ProductCard };
