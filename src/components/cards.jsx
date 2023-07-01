export default function cards(props){
    const icon = props.icon;
    const title = props.title;
    const content = props.content;

    return(
        <div className="cards p-8 rounded-lg py-10 pl-9 bg-greysito bgRelleno mb-5">
            <span className="py-2 bg-darksito w-8 text-xl rounded-lg px-4">{icon}</span>
            <h3 className="text-white text-lg font-bold pt-7 pb-3 ">{title}</h3>
            <div className="w-80 pr-7">
                <p className="text-grey font-medium">{content}</p>
                </div>
                </div>
    );
}