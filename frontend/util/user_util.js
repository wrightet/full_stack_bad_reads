export const fetchUser = id => (
    $.ajax({
        method: 'Get',
        url: `/api/users/${id}`
    })
)