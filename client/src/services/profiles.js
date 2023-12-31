const url = 'http://localhost:3070';

export async function getProfiles(filters) {
    try {
        const queryParams = new URLSearchParams({
            gender: filters.gender,
            skill_level: filters.skill_level,
            club: filters.club,
        }).toString();
        console.log("query params: ", queryParams)
        console.log(`${url}/profiles?${queryParams}`)
        const response = await fetch(`${url}/profiles?${queryParams}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function postProfile(profile) {
    try {
        const response = await fetch(`${url}/profiles`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: profile.name,
                surname: profile.surname,
                gender: profile.gender,
                skill_level: profile.skill_level,
                club: profile.club
            })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getProfile(id) {
    try {
        // console.log('ID ==> ', id)
        const response = await fetch(`${url}/profiles/${id}`);
        // console.log(response)
        if (!response.ok) {
            throw new Error('Profile not found');
        }
        const profile = await response.json();
        return profile;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

