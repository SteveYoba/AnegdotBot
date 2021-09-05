module.exports = {
    gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'НЕ СЛУЧАЙНЫЙ АНЕГДОТ', callback_data: 'anekButton' }]
            ]
        })
    },
againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'ещё', callback_data: 'anekButton' }]
            ]
        })
    }
}