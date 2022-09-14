task :start do
  task :developmebt do 
    exec 'heroku local -f Procfile.dev'
  end
end

desc 'Start Development Server'
task :start => 'start:development'
