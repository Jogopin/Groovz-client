import InputLabel from "./InputLabel"

export default function EditableUserInfo ({userPersonalDetails, setUserPersonalDetails,isEditing}){
    const onChange = (e)=>{
      
      setUserPersonalDetails(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    return(
      <div className="flex flex-wrap justify-evenly gap-5 ">
            <div className="flex w-full gap-2">
              <InputLabel
                id={"name"}
                label={"Name"}
                input={{
                  name: "firstName",
                  value: userPersonalDetails.firstName,
                  onChange: onChange,
                  placeholder: "John",
                  disabled: !isEditing
                }}
              />
              <InputLabel
                label={"Last Name"}
                id={"last-name"}
                input={{
                  name: "lastName",
                  value: userPersonalDetails.lastName,
                  onChange: onChange,
                  placeholder: "Doe",
                  disabled: !isEditing
                }}
              />
            </div>
            <InputLabel
              label={"Shipping address"}
              id={"address-input"}
              input={{
                name:"address",
                value: userPersonalDetails.address,
                onChange: onChange,
                placeholder: "Street, City, Country",
                disabled: !isEditing
              }}
            />
            
            
      </div>
    )
  }
