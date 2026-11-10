const getopenAIAPIResponse = async (message) => {
    try {
        const response = await fetch("http://localhost:11434/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3.2",
                messages: [
                    {
                        role: "user",
                        content: message
                    }
                ],
                stream: false
            })
        });

        const data = await response.json();

        return data.message.content;
    } catch (err) {
        console.log(err);
        return "Something went wrong";
    }
};

export default getopenAIAPIResponse;