export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host')
  
  if (host === 'sysifosweb.cl') {
    return sendRedirect(event, `https://www.sysifosweb.cl${event.path}`, 301)
  }
})
