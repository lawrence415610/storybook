import React from 'react'
import './AddTaskPopup.css'
import Profile from '../Profile/Profile'
export default class AddTaskPopup extends React.Component {
    constructor(props) {
        //Assignee
        super(props);
        this.state = {
            inputName: '',
            inputProject: '',
            assigneeInputText: '',
            projectPlaceholder: true,
            assigneePlaceholder: false,
            userDisplay: true,
            assigneeInput: false,
        }
        this.assigneeRef = React.createRef();
        this.textInput = null;

        this.setTextInputRef = e => {
            this.textInput = e;
        };

        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        };
    }

    handleOnNameChange = (e) => {
        this.setState({
            inputName: e.target.value,
        })
    }

    handleOnProjectChange = (e) => {
        this.setState({
            inputProject: e.target.value,
        })
    }

    handleOnProjectPlaceholderClick = (e) => {
        this.setState({
            projectPlaceholder: false,
        })
        if (this.textInput) this.textInput.focus();
    }

    handleOnAssigneeCloseClick = (e) => {
        this.setState({
            AssigneePlaceholder: true,
            userDisplay: false,
        })
        this.assigneeRef.current.focus();
    }

    handleOnAssigneeInputClick = (e) => {
        this.setState({
            AssigneePlaceholder: false,
            userDisplay: false,
            assigneeInput: true,
        })
        this.assigneeRef.current.focus();
    }

    handleOnAssigneeInputChange = (e) => {
        this.setState({
            assigneeInputText: e.target.value,
        })
    }

    // handleOnProjectPlaceholderReturnClick = (e) => {
    //     this.setState({
    //         projectPlaceholder: true,
    //     })
    // }

    componentDidMount() {

    }


    render() {
        const { inputName, projectPlaceholder, inputProject, AssigneePlaceholder, assigneeInput, userDisplay, assigneeInputText } = this.state;
        let bottomStatus = '';
        if (inputName.length !== 0) {
            bottomStatus = 'activated';
        } else {
            bottomStatus = 'disabled';
        }



        return (
            <div className="AddTaskPopup" >
                <div className="AddTaskPopup_TopIcon">
                    <span className="AddTaskPopup_TopIcon_icon material-icons">
                        minimize
                    </span>
                    <span className="AddTaskPopup_TopIcon_icon material-icons">
                        close
                    </span>
                </div>
                <input className="AddTaskPopup_TaskName" value={inputName} onChange={this.handleOnNameChange} placeholder='Task name' autoFocus />
                <div className='AddTaskPopup_AssigneeProjectField'>
                    <span className='AddTaskPopup_AssigneeProjectField_assigneeLabel'>For</span>
                    <span className='AddTaskPopup_AssigneeProjectField_token' onClick={this.handleOnAssigneeInputClick}>
                        {userDisplay && <Profile className='AddTaskPopup_AssigneeProjectField_token_avatar' user={this.props.user} />}
                        {userDisplay && <span className='AddTaskPopup_AssigneeProjectField_assigneeLabel AddTaskPopup_AssigneeProjectField_token_username'>{this.props.user.firstName}</span>}
                        {userDisplay && <span className="AddTaskPopup_AssigneeProjectField_token_remove material-icons" onClick={this.handleOnAssigneeCloseClick} >close</span>}
                        {AssigneePlaceholder && <span className='AddTaskPopup_AssigneeProjectField_token_assigneePlaceholder' onClick={this.handleOnAssigneeInputClick}>Assignee</span>}
                        {assigneeInput && <input className='AddTaskPopup_AssigneeProjectField_projectInput' ref={this.assigneeRef} placeholder='Assignee' onChange={this.handleOnAssigneeInputChange} value={assigneeInputText} />}
                    </span>
                    <span className='AddTaskPopup_AssigneeProjectField_assigneeLabel AddTaskPopup_AssigneeProjectField_projectLabel'>in</span>
                    {projectPlaceholder && <span className='AddTaskPopup_AssigneeProjectField_placeholder' onClick={this.handleOnProjectPlaceholderClick}>Project</span>}
                    {!projectPlaceholder && <input className='AddTaskPopup_AssigneeProjectField_projectInput' placeholder='Project' onChange={this.handleOnProjectChange} ref={this.setTextInputRef} value={inputProject} />}
                </div>
                <textarea className='AddTaskPopup_description' placeholder="Description"  ></textarea>
                <div className="AddTaskPopup_BottomIcon">
                    <span className="AddTaskPopup_BottomIcon_icon AddTaskPopup_BottomIcon_text material-icons">
                        text_format
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons">
                        alternate_email
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons">
                        mood
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons">
                        attach_file
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons AddTaskPopup_BottomIcon_calender">
                        calendar_today
                    </span>
                    <span className="AddTaskPopup_BottomIcon_icon material-icons AddTaskPopup_BottomIcon_group">
                        group_add
                    </span>
                    <button className={`AddTaskPopup_BottomIcon_button AddTaskPopup_BottomIcon_${bottomStatus}`}>Create Task</button>
                </div>
            </div >
        )
    }
}