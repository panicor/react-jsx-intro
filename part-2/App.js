function App(){
    return (
        <div>
            <Tweet
                username="cashmoney"
                name="Cash"
                date={new Date().toDateString()}
                msg="My name is Cash!"
            />
            <Tweet
                username="monkeyfun"
                name="Hailey"
                date={new Date().toDateString()}
                msg="My name is Hailey!"
            />
            <Tweet
                username="cynic"
                name="Scrooge"
                date={new Date().toDateString()}
                msg="My name is Scrooge!"
            />
        </div>
    )
}