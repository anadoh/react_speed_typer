import React from 'react'

const Settings = () => {
    return (
        <div className="settings" id="settings">
            <form id="settings-form">
            <label for="difficulty">Difficulty</label>
            <select id="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </form>
        </div>
    )
}

export default Settings
