pipeline {
  agent any
  options {
    ansiColor('xterm')
    disableConcurrentBuilds()
  }
  environment {
    REGISTRY = 'rma-projects-docker-local.repo.vito.be'
    REGISTRY_CREDENTIAL = 'svc_git_rma'
    DOCKER_IMAGE_REPO = 'techradar-website'
    DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
    DOCKER_IMAGE_REFERENCE = "${DOCKER_IMAGE_REPO}:${DOCKER_IMAGE_TAG}"
    CURRENT_COMMIT_TAG_NAME = get_commit_tag()
  }
  stages {
    stage('Build docker image') {
      steps {
        script {
          dockerImage = docker.build("${DOCKER_IMAGE_REFERENCE}", "--pull .")
        }
      }
    }
  
    // This stage will only run on the 'tag build', i.e.
    // - when a commit is tagged, or
    // - when a previously pushed commit is tagged)
    stage('Tag and push image to registry') {
      when {
        expression {
          get_commit_tag() != false || env.BRANCH_NAME == 'develop' || env.BRANCH_NAME == 'main'
        }
      }

      steps {
        script {
          docker.withRegistry("https://${REGISTRY}", REGISTRY_CREDENTIAL) {


            // Determine Git branch or tag
            def branch = sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim()
            def gitTag = get_commit_tag()


            // // Apply 'latest-develop' tag for develop branch
            // if (branch == 'develop') {
            //   dockerImage.push('latest-develop')
            // }
            // Apply 'latest' tag for main branch
            if (branch == 'main') {
              dockerImage.push('latest')
            }

            // Push with Git tag if available
            if (gitTag) {
              dockerImage.push("${gitTag}")
            }

            // Apply branch-specific moving tag
            dockerImage.push("${branch.replaceAll('/', '-')}-latest")
          }
        }
      }
    }

    // // This stage will only run on the 'tag build', i.e.
    // stage('Deploy tagged image to production') {
    //   when {
    //     expression {
    //       env.BRANCH_NAME == env.CURRENT_COMMIT_TAG_NAME
    //     }
    //   }
    //   steps {
    //     deployDockerImageStep(
    //       deployServer: 'sasappdock01.vito.local',
    //       deployFolder: '/var/docker/balmatt_dashboard',
    //       deployUser: 'jenkins',
    //       // The name of the environment variable that needs to be updated
    //       deployTagEnvironmentKey: 'IMAGE_TAG',
    //       deployTagEnvironmentValue: "${env.CURRENT_COMMIT_TAG_NAME}"
    //     )
    //   }
    // }
  }

  post {
    always {
      deleteDir()
    }
  }
}

def get_commit_tag() {
  // Run shell command and safely handle null or empty results
  def tag = sh(script: 'git tag --points-at HEAD', returnStdout: true).trim()
  if (tag != null && tag != '') {
    return tag
  } else {
    return false
  }
}