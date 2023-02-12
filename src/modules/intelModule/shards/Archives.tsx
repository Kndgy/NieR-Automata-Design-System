interface archives {
 content?: string[] | {};
}

export const Archives = ({content}:archives) => {
 return (
  <>
   {content}
  </>
 )
}